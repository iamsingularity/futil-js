import chai from 'chai'
import * as f from '../lib/futil-js'
chai.expect()
const expect = chai.expect

describe('Basic Functions', function() {
    it('maybeCall', function() {
        expect(f.maybeCall(x => 5)).to.deep.equal(5)
        expect(f.maybeCall(null)).to.deep.equal(false)
    })
})

describe('String Functions', function() {
    it('wrap', function() {
        expect(f.wrap('(', ')', 'asdf')).to.equal('(asdf)')
    })
    it('quote', function() {
        expect(f.quote('asdf')).to.equal('"asdf"')
    })
    it('parens', function() {
        expect(f.parens('asdf')).to.equal('(asdf)')
    })
    it('processQuotes', function() {
        expect(f.processQuotes('foo "bar" baz "biff"')).to.equal('foo bar baz biff')
    })
    it('getUniqueWords', function() {
        expect(f.getUniqueWords('the quick brown fox was quick and brown')).to.eql([
            'the',
            'quick',
            'brown',
            'fox',
            'was'
        ])
    })
})