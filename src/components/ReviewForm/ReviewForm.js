import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

import './ReviewForm.css'

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className='review-form'>
      <div className='form-control score-container'>
        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='unsatisfied'
            required
            checked={data.review === 'unsatisfied' || ''}
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='neutral'
            required
            checked={data.review === 'neutral' || ''}
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='satisfied'
            required
            checked={data.review === 'satisfied' || ''}
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className='radio-container'>
          <input
            type='radio'
            name='review'
            value='uvery_satisfied'
            required
            checked={data.review === 'uvery_satisfied' || ''}
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
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
          required
          value={data.comment || ''}
          onChange={(e) => updateFieldHandler('comment', e.target.value)} />
      </div>
    </div>
  )
}

export default ReviewForm