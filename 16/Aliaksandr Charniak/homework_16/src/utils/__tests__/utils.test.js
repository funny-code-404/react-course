import { getCorrectedArray } from '../utils'

describe('Utils', () => {
  describe('getCorrectedArray', () => {
    it('should empty array if data null', () => {
      expect(getCorrectedArray(null, 'units')).toEqual([])
    })

    it('should empty array if data undefined', () => {
      expect(getCorrectedArray(undefined, 'units')).toEqual([])
    })

    it('should object property from data', () => {
      const data = {
        units: {
          name: 'killer',
        },
        structures: {
          name: 'baracks',
        },
      }
      expect(getCorrectedArray(data, 'units')).toEqual({ name: 'killer' })
    })

    it('should array from data', () => {
      const units = {
        name: 'killer',
      }
      expect(getCorrectedArray(units, 'units')).toEqual([{ name: 'killer' }])
    })

    it('should array from data array', () => {
      const units = [
        {
          name: 'killer',
        },
      ]
      expect(getCorrectedArray(units, 'units')).toEqual([{ name: 'killer' }])
    })
  })
})
