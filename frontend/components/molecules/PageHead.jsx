import Title from '../atoms/Title';
import Description from '../atoms/Description';

export default ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  )
}
