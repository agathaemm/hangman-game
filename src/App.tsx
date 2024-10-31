import { useEffect, useState } from 'react';

import { Hangman } from './components';

import { ATTEMPTS } from './constants';

const words = ['REACT', 'JAVASCRIPT', 'FORCA', 'PROGRAMA'];

function App() {
  const [secretWord, setSecreatWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [remainingAttempts, setRemainingAttempts] = useState<number>(ATTEMPTS);
  const [victory, setVictory] = useState<boolean | null>(null); // null = jogo em andamento

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSecreatWord(randomWord);
  }, []);

  const handleLetterInput = (letter: string) => {
    if (guessedLetters.has(letter) || victory !== null) return; // Ignora letras repetidas ou fim de jogo

    setGuessedLetters((prev) => new Set(prev).add(letter));

    if (!secretWord.includes(letter)) {
      setRemainingAttempts((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const allLettersGuedded = secretWord
      .split('')
      .every((letter) => guessedLetters.has(letter));
    if (allLettersGuedded) {
      setVictory(true);
    } else if (remainingAttempts <= 0) {
      setVictory(false);
    }
  }, [secretWord, guessedLetters, remainingAttempts]);

  const maskedWord = secretWord
    .split('')
    .map((letter) => (guessedLetters.has(letter) ? letter : '_'))
    .join(' ');

  const restartGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setSecreatWord(newWord);
    setGuessedLetters(new Set());
    setRemainingAttempts(6);
    setVictory(null);
  };

  return (
    <div className="container">
      <h1>Jogo da forca</h1>

      <Hangman remainingAttempts={remainingAttempts} />

      <p className="word">{maskedWord}</p>
      <p>Tentativas restantes: {remainingAttempts}</p>

      {victory === null ? (
        <div className="input-area">
          <p>Digite uma letra:</p>
          <input
            type="text"
            maxLength={1}
            onChange={(e) => handleLetterInput(e.target.value.toUpperCase())}
            disabled={victory !== null}
          />
        </div>
      ) : victory ? (
        <p>🎉 Parabéns! Você venceu! 🎉</p>
      ) : (
        <p>😢 Você perdeu! A palavra era: {secretWord}</p>
      )}

      <button onClick={restartGame}>Reiniciar Jogo</button>
    </div>
  );
}

export default App;

// Fazer aparecer os membros de acordo com as tentativas restantes
// Criar a api do gemini para receber um prompt e voltar uma palavra
// conectar o jogo a essa api
