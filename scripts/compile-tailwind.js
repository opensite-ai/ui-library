#!/usr/bin/env node

/**
 * Compile Tailwind CSS with all component classes
 * This ensures all button/pressable styles are included
 */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

async function compileTailwind() {
  console.log('Compiling Tailwind CSS with all component classes...');

  // Create a temporary CSS file that imports all necessary styles
  const inputCSS = `
@import "tailwindcss";
@import "tw-animate-css";
@import "../src/app/forms.css";
@import "../src/app/button-safelist.css";

@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));
@config "../tailwind.config.ts";

/* Force inclusion of all Pressable component classes */
@layer components {
  /* Button variant classes - ensures Tailwind generates these */
  .pressable-default {
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
  }

  .pressable-destructive {
    @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
  }

  .pressable-outline {
    @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
  }

  .pressable-secondary {
    @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
  }

  .pressable-ghost {
    @apply hover:bg-accent hover:text-accent-foreground;
  }

  .pressable-link {
    @apply text-primary underline-offset-4 hover:underline;
  }

  /* Size classes */
  .pressable-size-default {
    @apply h-9 px-4 py-2;
  }

  .pressable-size-sm {
    @apply h-8 rounded-md px-3 text-xs;
  }

  .pressable-size-lg {
    @apply h-10 rounded-md px-8;
  }

  .pressable-size-icon {
    @apply h-9 w-9;
  }
}

/* Include the rest of the globals.css content */
${fs.readFileSync(path.join(__dirname, '../src/app/globals.css'), 'utf8')}
`;

  // Write the temporary input file
  const tempInputPath = path.join(__dirname, '../.temp-tailwind-input.css');
  fs.writeFileSync(tempInputPath, inputCSS);

  try {
    // Process with PostCSS and Tailwind
    const result = await postcss([
      tailwindcss({
        config: path.join(__dirname, '../tailwind.config.ts'),
        content: [
          path.join(__dirname, '../app/**/*.{js,ts,jsx,tsx,mdx}'),
          path.join(__dirname, '../components/**/*.{js,ts,jsx,tsx,mdx}'),
          path.join(__dirname, '../src/**/*.{js,ts,jsx,tsx,mdx}'),
          path.join(__dirname, '../node_modules/@opensite/ui/dist/**/*.{js,mjs}'),
          path.join(__dirname, '../node_modules/@page-speed/pressable/dist/**/*.{js,cjs}'),
          path.join(__dirname, '../node_modules/.pnpm/@page-speed+pressable*/node_modules/@page-speed/pressable/**/*.{js,jsx,ts,tsx}'),
        ],
      }),
      autoprefixer(),
    ]).process(inputCSS, { from: tempInputPath });

    // Write the compiled CSS
    const outputPath = path.join(__dirname, '../public/compiled-tailwind.css');
    fs.writeFileSync(outputPath, result.css);

    // Clean up temp file
    fs.unlinkSync(tempInputPath);

    console.log('✅ Tailwind CSS compiled successfully to public/compiled-tailwind.css');
    console.log(`   File size: ${(result.css.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Error compiling Tailwind CSS:', error);
    // Clean up temp file on error
    if (fs.existsSync(tempInputPath)) {
      fs.unlinkSync(tempInputPath);
    }
    process.exit(1);
  }
}

compileTailwind();