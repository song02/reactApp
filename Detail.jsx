import React, {Component} from 'react'
import detailApi from '@/api/detail.js'

class Detail extends Component {
	constructor (props) {
		super(props)
		this.state = {
			goodsListImg: '',
			goodsName: '',
			className: '',
			price: '',
			number: ''
		}
	}
	backHandler () {
		// console.log(this.props.location.state.flag)
		this.props.history.goBack()
	}
	componentDidMount () {
		const goodsID = this.props.match.params.goodsID
		detailApi.getData(goodsID,({goodsName, className, price, number, goodsListImg}) =>{
			this.setState({
				goodsName, className, price, number, goodsListImg
			})
		})
	}
	render () {
		return (
			<div className = 'container'>
				<div className = 'main'>
					<header>
						<div className='left' onClick={this.backHandler.bind(this)}>
							返回
						</div>
						<div className='center'>
							详情
						</div>
						<div className='right'>
							分享
						</div>
					</header>
					<div className = 'content'>
						Detail
						<img src={this.state.goodsListImg} />
						{this.state.goodsName}
					</div>
				</div>
				<footer>Detail底部</footer>
			</div>
		)
	}
}

export default Detail
