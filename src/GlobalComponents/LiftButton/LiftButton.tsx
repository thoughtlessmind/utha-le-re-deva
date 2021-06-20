import { FC } from 'react'
import { ReactComponent as UpIcon } from 'static/svg/chevron-double-up.svg'
import { ReactComponent as DownIcon } from 'static/svg/chevron-double-down.svg'

import styles from './liftButton.module.scss'

type LiftButtonProps = {
  pressed?: boolean
  btnType: 'up' | 'down'
}

const LiftButton: FC<LiftButtonProps> = (props) => {
  const { btnType, pressed = false } = props
  return (
    <button data-active={pressed} className={styles.btnWrapper}>
      <span>{btnType === 'up' ? <UpIcon /> : <DownIcon />}</span>
    </button>
  )
}

export default LiftButton
