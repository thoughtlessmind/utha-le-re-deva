import { Children, FC } from 'react'
import styles from './button.module.scss'

const Button: FC = (props) => {
  const { children } = props

  return <button className={styles.button}>{children}</button>
}

Button.propTypes = {
  children: Children
}

export default Button
