import fetch from 'node-fetch'

test('api root', async () => {
  const response = await fetch('https://littleskin.cn/api/yggdrasil')
  const json = await response.json()
  expect(json.meta.serverName).toBe('LittleSkin')
})
