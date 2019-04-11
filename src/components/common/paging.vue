<template>
	<div class="paging" v-show="pageData.pageTotal>1">
		<ul class="mo-paging">
			<!-- prev -->
			<li :class="['page-last', {'paging-disabled' : index === 1}]" @click="prev"><i class="ivu-icon ivu-icon-ios-arrow-left"></i></li>
			<!-- first -->
			<!--<li :class="['paging-item--first', {'paging-item--disabled' : index === 1}]" @click="first">first</li>-->
			<li :class="['more-point']" v-if="showPrevMore">...</li>

			<li :class="[{'active' : index === pager}]" v-for="pager in pagers" @click="go(pager)">{{ pager }}</li>

			<li :class="['more-point']" v-if="showNextMore">...</li>
			<!-- last -->
			<!--<li :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pageData.pageTotal}]" @click="last">last</li>-->
			<!-- next -->
			<li :class="['page-next', {'paging-disabled' : index === pageData.pageTotal}]" @click="next"><i class="ivu-icon ivu-icon-ios-arrow-right"></i></li>
		</ul>
		<div class="jump">
			<span>跳转至</span>
			<input type="tel" v-model="current" min="1" @keyup.enter="go(current)" />
			<span>页</span>
			<!--<button v-on:click="goPage(current)">确定</button>-->
		</div>
		<span>共<span class="blue">{{pageData.pageTotal}}</span>页,<span class="blue">{{pageData.dataTotal}}</span>条</span>
		<button class="blue refresh" v-show="refreshShow" @click="refresh">刷新</button>
	</div>
</template>

<script>
	export default {
		name: 'Paging',
		//通过props来接受从父组件传递过来的值
		props: {
			pageData: {
				//当前页数
				pageIndex: {
					type: Number,
					default: 1
				},
				//页面中的可见页码，其他的以...代替，必须是奇数
				pageCount: {
					type: Number,
					default: 11
				},
				//总记录数
				pageTotal: {
					type: Number,
					default: 1
				},
				//总记录数
				dataTotal: {
					type: Number,
					default: 1
				}
			},
			refreshShow:{
				type: Boolean,
				default: false
			}
		},
		methods: {
			refresh() {//刷新
				this.$parent.$parent.setPage(this.index);
			},
			//上一页
			prev() {
				if(this.index > 1) {
					this.go(this.index - 1)
				}
			},
			//下一页
			next() {
				if(this.index < this.pageData.pageTotal) {
					this.go(this.index + 1)
				}
			},
			//第一页
			first() {
				if(this.index !== 1) {
					this.go(1)
				}
			},
			//最后一页
			last() {
				if(this.index != this.pageData.pageTotal) {
					this.go(this.pageData.pageTotal)
				}
			},
			//跳转页面
			go(page) {
				page=parseInt(page);
				if(this.index !== page) {
					this.index = page
					if(this.index>this.pageData.pageTotal){
						this.index=this.pageData.pageTotal;
					}
					//父组件通过setPage方法来接受当前的页码
					this.$emit('setPage', this.index)
				}
			}
		},
		computed: {
			//计算页码，当count等变化时自动计算
			pagers() {
				const array = []
				const pageCount = this.pageData.pageCount
				const pageTotal = this.pageData.pageTotal
				let current = this.index
				const _offset = (pageCount - 1) / 2
				
				let offset = {
					start: current - _offset,
					end: current + _offset
				}
				if(pageCount%2==0){
					offset.start=parseInt(offset.start);
					offset.end=parseInt(offset.end)+1;
					if(current>_offset){
						offset.end=parseInt(offset.end-1);
					}
				}
				//-1, 3
				if(offset.start < 1) {
					offset.end = offset.end + (1 - offset.start)
					offset.start = 1
				}
				if(offset.end > pageTotal) {
					offset.start = offset.start - (offset.end - pageTotal)
					offset.end = pageTotal
				}
				if(offset.start < 1) offset.start = 1

				this.showPrevMore = (offset.start > 1)
				this.showNextMore = (offset.end < pageTotal)

				for(let i = offset.start; i <= offset.end; i++) {
					array.push(i)
				}
				return array
			}
		},
		data() {
			return {
				index: this.pageData.pageIndex, //当前页码
				current:this.pageData.pageIndex,//跳转页至页码输入框
				showPrevMore: false,
				showNextMore: false
			}
		},
		watch: {
			'pageData.pageIndex':function(val) {
				this.index = val || 1;
				this.current=this.index;
			}
		}
	}
</script>