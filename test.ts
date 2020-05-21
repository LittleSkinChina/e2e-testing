import test from 'ava'
import { launch } from 'puppeteer'

test('visit home page', async (t) => {
  const browser = await launch()
  const page = await browser.newPage()
  await page.goto('https://littleskin.cn/')

  const content = await page.content()
  t.true(content.includes('LittleSkin'))

  await browser.close()
})
