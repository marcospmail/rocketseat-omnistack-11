const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId()

    expect(id.length).toBeGreaterThanOrEqual(4)
    expect(id.length).toBeLessThanOrEqual(8)
  })
})