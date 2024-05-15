// eslint-disable-next-line react/prop-types
const Dropdown = ({ className, children, dropRef, onClick }) => {
  return (
    <div onClick={onClick} className={className} ref={dropRef}>
      <div>{children[0]}</div>
      <div>{children[1]}</div>
    </div>
  )
}

export default Dropdown
