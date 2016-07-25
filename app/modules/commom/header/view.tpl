<div id="mod-header">

	<div class="menu-mobile" id="menuMobile">
		<div class="dropdown">
			<div class="logo">
				<a href="index.html" class="logo logo-mb-not-home" style="display: inline-block;">
					<img src="images/New-Layout/home-page.svg" class="img-responsive" alt="">
					<p class="home-text">Học tiếng anh trực tuyến với gia sư</p>
				</a>
			</div>
			<div class="icon" id="justify-icon">
				<span class="justify-icon-not-home"><img src="images/New-Layout/ic_menu.png"></span>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="list-menu-mb navbar-fixed-top" id="list-menu-mb">
			<div class="top-menu-mb">
				<a href="">
					<img src="images/New-Layout/home-page.svg">
				</a>
				<span id="close-button">
					<img src="images/ic_close.png">
				</span>
			</div>
			<ul>
				<li><a href="">Đăng ký học thử</a></li>
				<li><a href="">Đăng ký trở thành gia sư</a></li>
				<li><a href="">Đăng nhập</a></li>
				<li><a href="">Tìm gia sư</a></li>
				<li class="drop"><a href="">Blog</a>
					<ul class="dropdown-mn">
						<li><a href="">Phương pháp học tiếng Anh</a></li>
						<li><a href="">Tiếng Anh kế toán</a></li>
						<li><a href="">Tiếng Anh cho IT</a></li>
						<li><a href="">Cộng đồng chia sẻ</a></li>
					</ul>
				</li>
				<li><a href="" class="drop">Ngôn ngữ</a>
					<ul class="dropdown-mn">
						<li>
							<a href="" class="float-left">English</a>
							<img src="images/New-Layout/flag-english.png" alt="" class="float-right">
							<div class="clearfix"></div>
						</li>
						<li>
							<a href="" class="float-left">Tiếng Việt</a>
							<img src="images/New-Layout/flag-vi-VN.png" alt="" class="float-right">
							<div class="clearfix"></div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>

	<!-- Start: Header for home -->
	<div class="header-home navbar-fixed-top">
		<div class="left">
			<a href="index.html" class="logo float-left">
				<img src="images/New-Layout/home-page.svg" class="img-responsive" alt="">
				<p class="home-text">Học tiếng anh trực tuyến với gia sư</p>
			</a>
			<div class="link float-left">
				<div class="item">
					<a href="" class=" item-link">
						TÌM GIA SƯ
					</a>
				</div>
				<div class="item">
					<a href="" class="item-link">
						BLOG
					</a>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="right">
			<ul class="list-inline">
				<li class="hot-line">
					<p>
						Hotline tư vấn:
						<a href="">
							<span class="phone">
								(+84) 969 765 955
							</span>
						</a>
					</p>
				</li>
				<li class="reg-log">
					<a href="" class="learn-trial-btn">
						ĐĂNG KÝ HỌC THỬ
					</a>
					<a href="" class="register" id="register-popup">Đăng ký</a>
					<a href="" class="log-in" id="login-popup">Đăng nhập</a>
				</li>
				<li class="vn-flag dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown"><img src="images/vn_flag.png"></a>
					<ul class="dropdown-menu language">
						<li><a href=""><img src="images/flag-vi-VN.png" class="ic-dropdown">Tiếng Việt</a></li>
						<li><a href=""><img src="images/flag-english.png" class="ic-dropdown">English</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="clearfix"></div>
	</div>
	<!-- End: Header for home -->
	{% include: '../../../modules/popup/signin/view.tpl' %}
	{% include: '../../../modules/popup/register/view.tpl' %}
</div>
