import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click(
    "text=When to Use Static Generation v.s. Server-side Rendering",
  );
  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("http://localhost:3000/posts/ssg-ssr");
});
//
