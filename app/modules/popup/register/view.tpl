<div class="form-register mfp-hide bzPopup bzPopupAnimation" id="popupFormReg">
	<form name="frmRegister">
		<a href="" class="btn-reg"><img src="images/button-reg-facebook.png" class="img-responsive"></a>
		<a href="" class="btn-reg"><img src="images/button-reg-google.png" class="img-responsive"></a>
		<hr class="or" />
		<p class="or">Hoặc</p>
		<div class="form-group">
			<input name="txtName" type="text" class="form-control"  id="exampleInputText" placeholder="Tên của bạn" /> 
			<p class="message-error" id="message-name" ng-show="frmRegister.txtName.$invalid && submitted">Họ tên không được để trống</p>
		</div>
		<div class="form-group">
			<div class="bg-input">
				<div class="bg-select">
					<select class="selectbox">
						<option>Quốc gia</option>
						<option>National</option>
						<option>National</option>
					</select>
				</div>
				<input type="text" id="phone" placeholder="Số điện thoại">
			</div>
			<p class="message-error" id="message-phone" ng-show="frmRegister.phone.$invalid && submitted">Số điện thoại phải là số</p>
		</div>
		<div class="form-group">
			<input name="email" type="text" class="form-control" id="exampleInputEmail" placeholder="Địa chỉ emai"/>
			<p class="message-error" id="message-email" ng-show="frmRegister.email.$invalid && submitted" class="message-error">Email không hợp lệ</p>
		</div>
		<div class="form-group">
			<input name="password" type="password" class="form-control" id="exampleInputPass" placeholder="Mật khẩu"/>
			<p class="message-error" id="message-email" ng-show="frmRegister.password.$invalid && submitted" class="message-error">Bạn chưa nhập password</p>
		</div>
		<p class="agree-to-terms">Bằng việc đăng kí, bạn đồng ý với các <a href="" class="link">điều khoản sử dụng</a></p>
		<input id="btDangKyBanner" class="btn btn-default bg-onrange register" type="submit" value="đăng ký">
		<hr/>
		<p class="have-account">Đã có tài khoản? <a href="">Đăng nhập</a></p>
	</form>
</div>