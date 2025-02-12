import { describe, it, expect } from "vitest";
import { calculateScore, getScore } from "../routes/scores";

describe('match', () => {
    it('Cuando una jugadora gana, gana pah siempre', () => {
        var match = {
            player1: 'Serena',
            player2: 'Venus',
            score: {
                player1: 0,
                player2: 0,
            }
        }
        match = calculateScore(match, 'player1');
        match = calculateScore(match, 'player1');
        match = calculateScore(match, 'player1');
        match = calculateScore(match, 'player1');
        
        expect(match.score.result).toBe('Win for player1');

        match = calculateScore(match, 'player2');
        match = calculateScore(match, 'player2');
        match = calculateScore(match, 'player2');
        match = calculateScore(match, 'player2');
        match = calculateScore(match, 'player2');

        expect(match.score.result).toBe('Win for player1');
    });

})