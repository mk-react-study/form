import React from 'react'

function textBox(props) {
  let classList = ['form-control']
  if (props.config.validationRequired && props.config.touched) {
    if (props.config.valid) {
      classList.push('is-valid')
    } else {
      classList.push('is-invalid')
    }
  }

  return (
    <div className='form-row'>
      <div className='col-md-4 mb-3'>
        <label for='id_user_name'>
          <span className='text-danger'>* </span>
          {props.config.label}
        </label>
        <input
          type='text'
          className={classList.join(' ')}
          id='id_user_name'
          placeholder={props.config.placeHolder}
          value={props.config.value}
          required
          onChange={props.onChange}
        ></input>
        <div className='valid-feedback'>Looks good!</div>
        <div className='invalid-feedback'>Please provide full name.</div>
      </div>
    </div>
  )
}

export default textBox
