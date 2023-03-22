import './EndForm.css';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

const emojiData = {
  usatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const EndForm = ({ data }) => {
  return (
    <div className='end-container'>
      <h2>Falta pouco!</h2>
      <p>
        A sua opnião é muito importante para nós.
      </p>
      <h3>Resumo da sua avaliação: {data.name}</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default EndForm