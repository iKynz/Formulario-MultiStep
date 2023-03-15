import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

import './ReviewForm.css'

const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className='form-control score-container'>
        <label className='radio-container'>
          <input type='radio' name='review' value='unsatisfied' required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className='radio-container'>
          <input type='radio' name='review' value='neutral' required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className='radio-container'>
          <input type='radio' name='review' value='satisfied' required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className='radio-container'>
          <input type='radio' name='review' value='uvery_satisfied' required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor="comment">Comentário:</label>
        <textarea 
        name='comment' 
        id='comment'
        placeholder='Conte-nos o que achou do produto.' 
        required />
      </div>
    </div>
  )
}

export default ReviewForm