import Rize from 'rize'

test('visit home page', async () => {
  const rize = new Rize()
  await rize.goto('https://littleskin.cn/').assertSee('LittleSkin').end()
})
