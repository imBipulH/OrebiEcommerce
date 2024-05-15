
// eslint-disable-next-line react/prop-types
const Flex = ({className, children}) => {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}

export default Flex
