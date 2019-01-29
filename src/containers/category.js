import Category from '~/components/pages/category/'
import { connect } from 'react-redux'
import { getProductsWithCategoryId } from '~/store/actions/product'
import { getCategoryFilters, setFilters } from '~/store/actions/filter'

const mapStateToProps = state => {
    return {
        product: state.product,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    getProductsWithCategoryId,
    getCategoryFilters,
    setFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);