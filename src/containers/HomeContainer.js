import {connect} from 'react-redux'
import Home from '../components/Home';
import {addTocart,removeTocart} from '../Services/Actions/actions'


const mapStateToProps = state=>({
       data:state.cardItem
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=> dispatch(addTocart(data)),
    removeToCartHandler: data=> dispatch(removeTocart(data))

})





 export default connect(mapStateToProps,mapDispatchToProps)(Home);



// HomeContainer is use for to connect the action to reducer.