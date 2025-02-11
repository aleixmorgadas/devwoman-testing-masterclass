import { describe, it, expect } from "vitest";
import { getScore } from "../routes/scores";

describe('getScore', () => {
    it('0-0 returns Love-Love', () => {
        const result = getScore(0, 0);
        
        expect(result).toBe('Love-All');
    })
})