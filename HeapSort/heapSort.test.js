const expect = require('chai').expect
const HeapSort = require('./heapSort')

xdescribe('Heap Sort for Binary Heap', () => {
  const SORTEXAMPLE = 'SORTEXAMPLE';
  let HS;

  beforeEach(() => {
    HS = new HeapSort(SORTEXAMPLE.split(''))
  })

  describe('Constructor', () => {
    it('should have array on its property with input array that starts at index 1', () => {
      expect(HS).to.have.ownProperty('array')
      expect(HS.array).to.deep.equal(SORTEXAMPLE.split(''))
    })

    it('should have size on its property and its equal to length of input array excluding index 0', () => {
      expect(HS).to.have.ownProperty('size')
      expect(HS.size).to.equal(11)
    })
  })

  describe('isEmpty', () => {
    it('should be a property on the class', () => {
      expect(HS).to.have.property('isEmpty')
    })

    it('should check if array is empty', () => {
      expect(HS.isEmpty()).to.be.false

      HS.array = [];
      HS.size = 0;

      expect(HS.isEmpty()).to.be.true
    })
  })

  // Note: Since Binary Heaps begin at index 1 we need to adjust this method to check one index to the left. Our array actually starts at index 0
  describe('isLess', () => {
    it('should be a property on the class', () => {
      expect(HS).to.have.property('isLess')
    })


    it('should receive two indicies and check the array to see if first < second', () => {
      expect(HS.isLess(1, 2)).to.be.false
      expect(HS.isLess(7, 8)).to.be.true
      expect(HS.isLess(10, 3)).to.be.true
      expect(HS.isLess(4, 9)).to.be.false
    })
  })

  // Note: Since Binary Heaps begin at index 1 we need to adjust this method to check one index to the left. Our array actually starts at index 0
  describe('exchange', () => {
    it('should be a property on the class', () => {
      expect(HS).to.have.property('exchange')
    })

    it('should receive two indicies and swap those elements in the array', () => {
      HS.exchange(1,2)
      expect(HS.array).to.deep.equal('OSRTEXAMPLE'.split(''))
      HS.exchange(2,4)
      expect(HS.array).to.deep.equal('OTRSEXAMPLE'.split(''))
      HS.exchange(3,5)
      expect(HS.array).to.deep.equal('OTESRXAMPLE'.split(''))
      HS.exchange(10,7)
      expect(HS.array).to.deep.equal('OTESRXLMPAE'.split(''))
    })
  })

  describe('sink', () => {
    it('should be a property on the class', () => {
      expect(HS).to.have.property('sink')
    })

    it('should move elements in the tree down to appropriate place', () => {
      HS.sink(5, 11)
      expect(HS.array).to.deep.equal('SORTLXAMPEE'.split(''))
      HS.sink(4, 11)
      expect(HS.array).to.deep.equal('SORTLXAMPEE'.split(''))
      HS.sink(3, 11)
      expect(HS.array).to.deep.equal('SOXTLRAMPEE'.split(''))
      HS.sink(2, 11)
      expect(HS.array).to.deep.equal('STXPLRAMOEE'.split(''))
      HS.sink(1, 11)
      expect(HS.array).to.deep.equal('XTSPLRAMOEE'.split(''))
    })
  })

  describe('sort', () => {
    it('should be a property on the class', () => {
      expect(HS).to.have.property('sort')
    })

    it('should sort the heap', () => {
      const SOMECLEVERJOKEHERE = 'SOMECLEVERJOKEHERE';
      const LOTSOFMEMES = 'LOTSOFMEMES';
      const SOMANYHEAPSSENDHALPPLS = 'SOMANYHEAPSSENDHALPPLS';
      const FULLSTACK = 'FULLSTACK';

      HS.sort()
      expect(HS.array).to.deep.equal(SORTEXAMPLE.split('').sort())

      HS.array = SOMECLEVERJOKEHERE.split('')
      HS.size = SOMECLEVERJOKEHERE.length
      HS.sort()
      expect(HS.array).to.deep.equal(SOMECLEVERJOKEHERE.split('').sort())

      HS.array = LOTSOFMEMES.split('')
      HS.size = LOTSOFMEMES.length
      HS.sort()
      expect(HS.array).to.deep.equal(LOTSOFMEMES.split('').sort())

      HS.array = SOMANYHEAPSSENDHALPPLS.split('')
      HS.size = SOMANYHEAPSSENDHALPPLS.length
      HS.sort()
      expect(HS.array).to.deep.equal(SOMANYHEAPSSENDHALPPLS.split('').sort())

      HS.array = FULLSTACK.split('')
      HS.size = FULLSTACK.length
      HS.sort()
      expect(HS.array).to.deep.equal(FULLSTACK.split('').sort())
    })
  })
})
