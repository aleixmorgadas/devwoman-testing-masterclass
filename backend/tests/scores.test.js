import { describe, it, expect } from "vitest";
import { getScore } from "../routes/scores";

describe('getScore', () => {
    it('0-0 returns Love-All', () => {
        const result = getScore(0, 0);
        
        expect(result).toBe('Love-All');
    });

    it('1-0 returns 15-0', () => {
        const result = getScore(1, 0);

        expect(result).toBe('Fifteen-Love');
    });

    it('it  does not accept negative numbers', () => {
        expect(() => getScore(-1, 0)).toThrowError();
    })
})