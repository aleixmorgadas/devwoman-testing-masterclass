import { test, expect } from '@playwright/test';

test('Se crea un juego, y gana la jugadora 1', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Player1' }).click();
  await page.getByRole('textbox', { name: 'Player1' }).fill('Maria');
  await page.getByRole('textbox', { name: 'Player1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Player2' }).fill('Juana');
  await page.getByRole('button', { name: 'Create new match' }).click();
  await page.getByRole('link', { name: 'See match' }).click();
  await page.getByRole('button', { name: 'Score\'s player 1' }).click();
  await page.getByRole('button', { name: 'Score\'s player 2' }).click();
  await page.getByRole('button', { name: 'Score\'s player 1' }).click();
  await page.getByRole('button', { name: 'Score\'s player 1' }).click();
  await page.getByRole('button', { name: 'Score\'s player 1' }).click();
});