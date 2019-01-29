import Home from '~/components/pages/home/'
import { connect } from 'react-redux'
import { get } from '~/store/actions/homepage'

const mapStateToProps = state => {
  return {
    homepage: state.homepage
  }
}

const mapDispatchToProps = {
  get
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
