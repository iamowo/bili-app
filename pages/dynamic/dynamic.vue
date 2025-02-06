<script>
</script>

<template>
	<view class="dynamic-title">关注</view>
	<view class="dyanmic-type">
		<view class="two-one">全部</view>
		<view class="two-one">视频</view>
	</view>
	<scroll-view scroll-x class="scroll-people">
		<view class="one-peple" v-for="item in 10"></view>
	</scroll-view>
	<view class="dyanimc-content">
		<view class="one-dyanmic">
			<vide class="dy-top">
				<image
					class="topavatar"
					src=""
					mode="scaleToFill"
				/>
				<vide class="top-right-info">
					<view class="name-line">name-line</view>
					<view class="time-line">12-21</view>
				</vide>
			</vide>
			<view class="really-content" v-if="false">
				<image
					class="vide-img"
					src=""
					mode="scaleToFill"
				/>
			</view>
			<view class="really-content" v-else-if="true">
				<view class="text-type">
						123
				</view>
			</view>
			<view class="really-content" v-else>
				<image
					class="vide-img"
					src=""
					mode="scaleToFill"
				/>
			</view>
			<view class="dy-title">
				<text class="titletest">123123123</text>
			</view>
			<view class="dy-infos">
				<view class="one-view">
					<text class="icon iconfont">1</text>
					<text class="numstext">xixi</text>
				</view>
				<view class="one-view">
					<text class="icon iconfont">1</text>
					<text class="numstext">xixi</text>
				</view>
				<view class="one-view">
					<text class="icon iconfont">1</text>
					<text class="numstext">xixi</text>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss">
	.dynamic-title {
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #222;
		font-size: 18px;
		font-weight: 550;
		box-sizing: border-box;
		border-bottom: 1px solid #e3e5e7;
		background-color: #fff;
	}
	.dyanmic-type {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
		.two-one {
			width: 47%;
			height: 30px;
			text-align: center;
			line-height: 30px;
			border-radius: 4px;
			background-color: #e3e5e7;
			color: #18191c;
			font-size: 16px;
		}
	}
	.scroll-people {
		box-sizing: border-box;
		padding-top: 20px;
		width: 100%;
		height: 80px;
		background-color: red;
		background-color: #fff;
		border-radius: 0 0 4px 4px;
		box-sizing: border-box;
		display: flex;
		.one-peple {
			margin: 0 10px;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background-color: red;
		}
	}
	.dyanimc-content {
		width: 100%;
		height: fit-content;
		box-sizing: border-box;
		.one-dyanmic {
			box-sizing: border-box;
			padding: 0 10px;
			width: 100%;
			height: fit-content;
			background-color: #fff;
			margin-top: 10px;
			border-radius: 4px;
			.dy-top {
				width: 100%;
				height: 50px;
				display: flex;
				align-items: center;
				.topavatar {
					background-color: red;
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				.top-right-info {
					margin-left: 10px;
					height: 40px;
					flex: 1;
					.name-line {
						width: 100%;
						height: 20px;
						font-size: 16px;
						color: #222;
					}
					.time-line {
						width: 100%;
						height: 20px;
						font-size: 14px;
						color: #18191c;
					}
				}
			}
			.really-content {
				width: 100%;
				height: fit-content;
				margin: 5px 0;
				.vide-img  {
					width: 100%;
					height: 200px;
					border-radius: 4px;
					background-color: red;
				}
				.text-type {
					width: 100%;
					height: fit-content;
					color: #3d3d3d;
					font-size: 14px;
					line-height: 20px;
				}
			}
			.dy-title {
				width: 100%;
				height: 25px;
				line-height: 25px;
				font-size: 16px;
				color: #222;
			}
			.dy-infos {
				width: 100%;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				.one-view {
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					.icon {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>