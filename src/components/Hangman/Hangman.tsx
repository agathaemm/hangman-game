import Styles from './Hangman.styles';

interface IHangmanProps {
  remainingAttempts: number;
}

const Hangman = ({ remainingAttempts }: IHangmanProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Head remainingAttempts={remainingAttempts}>
        <div className="eye">x</div>
        <div className="eye">x</div>
      </Styles.Head>
      <Styles.Body remainingAttempts={remainingAttempts} />
      <Styles.Foot>
        <Styles.LeftLeg remainingAttempts={remainingAttempts} />
        <Styles.RightLef remainingAttempts={remainingAttempts} />
      </Styles.Foot>
    </Styles.Wrapper>
  );
};

export default Hangman;
