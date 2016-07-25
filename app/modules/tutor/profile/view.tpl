<div id="mod-tutor-profile" class="module" >
	<div class="container">
		<div class="content-profile">
			<div class="message-alert" id="message-alert">
				<p>
					Hi {name}, this is the tutor profile you have just made on our website. You can improve it by adding information to the below sections.
				</p>
				<div class="close-btn" id="close-btn"></div>
			</div>
			<div class="avatar-tutor">
				<div class="">
					<div class="avatar">
						<img src="images/avatar-tutor.png" class="img-responsive">
						<a href="" class="bz-btn edit-avatar" style="text-decoration:none;">Đổi ảnh đại diện</a>
					</div>
					<div class="text-imfomation">
						<div class="first-row">
							<a href="mailto:hello@antoree.com" class="mail link first">hello@antoree.com</a>
							<a href="" class="lock" id="edit-password">Đổi mật khẩu</a>
							<a href="" class="avail-time first">Available time</a>
							<a href="" class="payment-infor" id="payment-infor">Your payment information</a>
						</div>
						<div id="popup-payment" class="bzPopup bzPopupAnimation mfp-hide">
							{% include: '../../../modules/payment-info/view.tpl' %}
						</div>
						{% include: '../../../modules/popup/editPass/view.tpl' %}
						<p class="create">4 years experience in teach english with 20 students, IELTS 8.0.<a href=""><img src="images/ic_create.png"></a></p>
						<p class="timer"><span class="number-time">80+ </span>giờ dạy</p>
						<ul class="list-inline list-star">
							<li><img src="images/ic_star.png"></li>
							<li><img src="images/ic_star.png"></li>
							<li><img src="images/ic_star.png"></li>
							<li><img src="images/ic_star.png"></li>
							<li><img src="images/ic_star_half.png"></li>
							<li><a href="tutor-detail.html" style="padding-left:0;"><span class="evaluate">(68 Đánh giá)</span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="list-detail-tutor">

				<ul class="list-inline list-tab nav-tabs" id="list-tab">
					<li class="active" role="presentation"><a data-toggle="tab" role="tab" aria-controls="imfomation-individual" href="#imfomation-individual" aria-expanded="true" >Thông tin cá nhân</a></li>
					<li role="presentation"><a data-toggle="tab" role="tab" aria-controls="education-and-job" href="#education-and-job" aria-expanded="false" >Học vấn & nghề nghiệp</a></li>
					<li role="presentation"><a data-toggle="tab" role="tab" aria-controls="teaching-imfomation" href="#teaching-imfomation" aria-expanded="false" >Thông tin giảng dạy</a></li>
					<li role="presentation"><a data-toggle="tab" role="tab" aria-controls="your-post" href="#your-post" aria-expanded="false" >Bài đăng của bạn</a></li>
				</ul>
				<div class="clearfix"></div>

				<div class="tab-content">
					<!-- Start: Information -->
					<div id="imfomation-individual" class="tab-pane fade in active" role="tabpanel">
						<div id="imfomation-account" class="margin-top">
							<h3 class="title-green">Thông tin tài khoản</h3>
							<form>
								<label>Họ và tên</label>
								<input type="text" /></br>
								<label>Ngày sinh</label>
								<input type="text" /></br>
								<label>Giới tính</label>
								<select>
									<option></option>
									<option></option>
									<option></option>
								</select></br>
								<label>Quốc tịch</label>
								<select>
									<option></option>
									<option></option>
									<option></option>
								</select></br>
								<label>Điện thoại</label>
								<input type="text" /></br>
								<label>Địa chỉ</label>
								<input type="text" /></br>
								<label>Thành phố</label>
								<input type="text" /></br>
								<label>Quốc gia</label>
								<select>
									<option></option>
									<option></option>
									<option></option>
								</select></br>
								<input type="submit" class="submit" value="Lưu thay đổi" />
							</form>
							<div class="clearfix"></div>
						</div>
						<div id="for-you" class="margin-top">
							<h3 class="title-green">Về bạn</h3>
							<form>
								<label class="label-of-textarea">Giới thiệu bản thân<img class="question-mark" src="images/icon_question.png"></label>
								<textarea rows="10"></textarea></br>
								<input type="submit" class="submit" value="Lưu thay đổi" />
							</form>
							<div class="clearfix"></div>
						</div>
						<div id="society" class="margin-top">
							<h3 class="title-green">Kết nối xã hội</h3>
							<div class="row child-society">
								<div class="col-xs-1 icon-social">
									<img src="images/skype.png">
								</div>
								<div class="col-xs-9 bettwen">
									<input type="text" />
								</div>
								<div class="col-xs-2">
									<input type="submit" class="submit skype" value="Lưu lại" />
								</div>
							</div>
							<div class="row child-society">
								<div class="col-xs-1 icon-social">
									<img src="images/facebook.png">
								</div>
								<div class="col-xs-9 bettwen">
									<p><span class="title-cn">Đã kết nối:</span>https://www.facebook.com/minhtien.it</p>
								</div>
								<div class="col-xs-2">
								</div>
							</div>
							<div class="row child-society">
								<div class="col-xs-1 icon-social">
									<img src="images/facebook.png">
								</div>
								<div class="col-xs-9 bettwen">
									<p><span class="title-cn">Chưa kết nối với Facebook</span></p>
								</div>
								<div class="col-xs-2">
									<input type="submit" class="submit facebook" value="Kết nối" />
								</div>
							</div>
						</div>
					</div>
					<!-- End: Information -->
					
					<!-- Start: Education and Job -->
					<div id="education-and-job" class="tab-pane fade" role="tabpanel">
						<div id="specialized-and-skilled" class="margin-top">
							<h3 class="title-green">Chuyên ngành và kĩ năng</h3>
							<label>Chuyên ngành và kĩ năng</label>
							<div>
								<select name="" id="select-skill" class="form-group" multiple="multiple">
									<option value="1">Marketing</option>
									<option value="2">Marketing</option>
									<option value="3">Marketing</option>
									<option value="4">Marketing</option>
								</select>
							</div>
							<input type="submit" class="submit" value="Lưu thay đổi" />
						</div>

						<div id="history-work" class="margin-top">
							<h3 class="title-green">Lịch sử làm việc</h3>
							<form>
								<label>Công ty</label>
								<input type="text" /></br>
								<label>Vị trí</label>
								<input type="text" /></br>
								<label>Nơi làm việc</label>
								<input type="text" /></br>
								<div class="row day">
									<div class="col-xs-6">
										<label class="day-work">Ngày bắt đầu</label>
										<input type="text" /></br>
									</div>
									<div class="col-xs-6">
										<label class="day-work">Ngày kết thúc</label>
										<input type="text" /></br>
									</div>
								</div>
								<label class="label-of-textarea">Mô tả</label>
								<textarea rows="4"></textarea>
								<a href="" class="delete"><img src="images/New-Layout/ic_control_point_delete.png" /> Thêm chứng chỉ</a>
								<hr/>
								<label>Công ty</label>
								<input type="text" /></br>
								<label>Vị trí</label>
								<input type="text" /></br>
								<label>Nơi làm việc</label>
								<input type="text" /></br>
								<div class="row day">
									<div class="col-xs-6">
										<label class="day-work">Ngày bắt đầu</label>
										<input type="text" /></br>
									</div>
									<div class="col-xs-6">
										<label class="day-work">Ngày kết thúc</label>
										<input type="text" /></br>
									</div>
								</div>
								<label class="label-of-textarea">Mô tả</label>
								<textarea rows="4"></textarea>
								<a href="" class="add"><img src="images/New-Layout/ic_control_point.png" /> Thêm công ty</a>
							</form>
						</div>
						<div class="clearfix"></div>
						<div id="education" class="margin-top">
							<h3 class="title-green">Học vấn</h3>
							<form>
								<label>Nơi học</label>
								<input type="text" /></br>
								<label>Vị trí</label>
								<input type="text" /></br>
								<label>Nơi học</label>
								<input type="text" /></br>
								<div class="row day">
									<div class="col-xs-6">
										<label class="day-work">Ngày bắt đầu</label>
										<input type="text" /></br>
									</div>
									<div class="col-xs-6">
										<label class="day-work">Ngày kết thúc</label>
										<input type="text" /></br>
									</div> 
								</div>
								<label class="label-of-textarea">Mô tả</label>
								<textarea rows="4"></textarea>
							</form>
							<a href="" class="add"><img src="images/New-Layout/ic_control_point.png" /> Thêm học vấn</a>
							<input class="submit" type="submit" value="Lưu thay đổi" />
						</div>
						<div class="clearfix"></div>
						<div id="certificate-and-diploma" class="margin-top">
							<h3 class="title-green">Chứng chỉ và bằng cấp</h3>
							<form>
								<label>Tên chứng chỉ</label>
								<select name="" id="" class="select-certificate">
									<option value="TOEIC">TOEIC</option>
									<option value="TOEFL">TOEFL</option>
									<option value="IELTS">IELTS</option>
									<option value="TESOL">TESOL</option>
									<option value="Khác">Khác</option>
								</select>
								<label>Cấp bởi</label>
								<input type="text" /></br>
								<div class="row day">
									<div class="col-xs-6">
										<label class="day-work">Ngày cấp</label>
										<input type="text" /></br>
									</div>
								</div>
								<label class="label-of-textarea">Mô tả</label>
								<div class="infor-certificate">
									<div class="col-sm-3 imgate-certificate float-right">
										<!-- <img src="images/New-Layout/upload-file.jpg" alt="" class="img-responsive"> -->
										<button class="file-upload">
											<input type="file" class="file-input">
											<span>Upload certificate</span><br>
											<span class="ita">(support JPG, PNG)</span>
										</button>

									</div>
									<div class="col-sm-9 infor-input float-left">
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">Listening</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">Writing</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">Reading</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">Speaking</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">Overall</label>
												<label for="">Band Score</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="col-xs-4 infor-item">
											<div class="label-certificate float-left">
												<label for="">CEFR</label>
												<label for="">Level</label>
											</div>
											<input type="text" class="input-certificate float-right">
											<div class="clearfix"></div>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="clearfix"></div>
								</div>
								<textarea rows="4"></textarea>
							</form>
							<a href="" class="add"><img src="images/New-Layout/ic_control_point.png" /> Thêm chứng chỉ</a>
							<input class="submit" type="submit" value="Lưu thay đổi" />
						</div>
					</div>
					<div class="clearfix"></div>
					<!-- End: Education and Job -->

					<!-- Start: Teaching Infomation -->
					<div id="teaching-imfomation" class="tab-pane fade" role="tabpanel">
						<div id="audio" class="margin-top">
							<h3 class="title-green">Audio</h3>
							<div class="row child-audio">
								<div class="col-xs-9 audio-bar">
									<audio preload id="audio1" controls="controls" src="http://mp3.zing.vn/embed/song/ZW7I7IBB?start=true">Your browser does not support HTML5 Audio!</audio>
								</div>
								<div class="col-xs-3 button">
									<input class="upload-save" type="button" value="Upload file mới" />
								</div>
							</div>
						</div>

						<div id="video" class="margin-top">
							<h3 class="title-green">Video</h3>
							<label>Youtube link</label>
							<div class="row">
								<div class="col-xs-12 col-sm-10">
									<input class="input-have-border" />
								</div>
								<div class="col-xs-12 col-sm-2 button-save">
									<input class="upload-save" type="submit" value="Lưu lại" />
								</div>
							</div>
						</div>

						<div id="subjects-and-theme" class="margin-top">
							<h3 class="title-green">Môn học và chủ đề</h3>
							<form>
								<label>Chủ đề dạy</label>
								<input class="input-have-border"/></br>
								<label class="label-of-textarea">Kinh nghiệm giảng dạy<img class="question-mark" src="images/icon_question.png"></label>
								<textarea rows="10"></textarea></br>
								<label class="label-of-textarea">Phương pháp dạy<img class="question-mark" src="images/icon_question.png"></label>
								<textarea rows="10"></textarea>
								<input style="width:110px;" class="submit" type="submit" value="Lưu thay đổi" />
							</form>
						</div>
					</div>
					<div class="clearfix"></div>
					<!-- End: Teaching Infomation -->

					<!-- Start: Your Post -->
					<div id="your-post" class="tab-pane fade" role="tabpanel">
						<div class="title-and-post">
							<h3 class="title-green" style="">
								Bài đăng của bạn
							</h3>
							<a href="" class="post" style="">
								<img src="images/New-Layout/cross.png" alt="">
								Đăng bài mới
							</a>
							<div class="clearfix"></div>
						</div>
						<div class="clearfix"></div>
						<div class="content-blog-post">
							<div class="image-blog">
								<a href=""><img src="images/img-blog-post1.png" ></a>
							</div>
							<div class="text-coment">
								<a href=""><span class="name-certificate">A calling that needs an answer</span></a>
								<a href="" class="edit-post float-right">
									Sửa
								</a></br>
								<p>Teaching seems to be a mission and passion for some of us. After finishing my bachelor’s degree in teacher education, I tried to seek for jobs in different schools. In my journey for the search…</p>
							</div>
						</div>
						<div class="content-blog-post">
							<div class="image-blog">
								<a href=""><img src="images/img-blog-post2.png" ></a>
							</div>
							<div class="text-coment">
								<a href=""><span class="name-certificate">Khắc phục sai ngữ pháp khi nói tiếng Anh</span></a>
								<a href="" class="edit-post float-right">
									Sửa
								</a></br>
								<p>Nguyên nhân đầu tiên dẫn đến việc không nói đúng ngữ pháp chính là việc bạn không biết.Chẳng hạn như,không biết về mệnh đề quan hệ hay câu bị động,bạn sẽ khó mà nói đúng được ngữ...</p>
							</div>
						</div>
					</div>
					<!-- End: Your Post -->

				</div>
			</div>
		</div>
	</div>
</div>