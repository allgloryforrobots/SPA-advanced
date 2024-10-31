import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with mods', () => {
        const expected = 'remove-btn hovered selectable'
        expect(classNames('remove-btn', { hovered: true, selectable: true, red: false })).toBe(
            expected
        )
    })
    test('with additional class', () => {
        const expected = 'remove-btn pdg'
        expect(classNames('remove-btn', {}, ['pdg'])).toBe(expected)
    })
    test('with mods and additional', () => {
        const expected = 'remove-btn pdg extra hovered selectable'
        expect(
            classNames('remove-btn', { hovered: true, selectable: true }, ['pdg', 'extra'])
        ).toBe(expected)
    })
    test('mods undefined and false', () => {
        const expected = 'remove-btn'
        expect(classNames('remove-btn', { selectable: undefined, red: false })).toBe(expected)
    })
})
