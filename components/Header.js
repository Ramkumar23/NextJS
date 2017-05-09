import Link from 'next/link'

const LinkStyle={
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href='/'>
            <a style={LinkStyle}> Home </a>
        </Link>
        <Link href='/about'>
            <a style={LinkStyle} >About Me </a>
        </Link>
    </div>
)

export default Header
