import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Player1' }).click();
  await page.getByRole('textbox', { name: 'Player1' }).fill('Venus');
  await page.getByRole('textbox', { name: 'Player1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Player2' }).fill('Serena');
  await page.getByRole('textbox', { name: 'Player2' }).press('Enter');
  await expect(page.getByText('Serena')).not.toBeVisible();
  await page.getByRole('button', { name: 'Create new match' }).click();
  await expect(page.getByText('Serena')).toBeVisible();
  await page.getByRole('link', { name: 'See match' }).click();
  await page.getByRole('button', { name: 'Score\'s player 1' }).click();
  await page.getByRole('button', { name: 'Score\'s player 2' }).click();
  await page.getByText('See matches Index Player 1:').click();
  await page.getByRole('button', { name: 'Score\'s player 2' }).click();
  await page.getByRole('button', { name: 'Score\'s player 2' }).click();
  await page.getByRole('button', { name: 'Score\'s player 2' }).click();
});