export const svgret = (props) => {
    return (
      `<svg height="60" width="200">
      <text x="0" y="15" fill="red" transform="rotate(30 20,40)">${props.username}</text>
    </svg>`
    )
}