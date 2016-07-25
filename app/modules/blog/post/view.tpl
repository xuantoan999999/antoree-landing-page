<div id="mod-blog-post">
	<form action="" class="form-post">
		<div class="post-content">
			<div class="editable-header" contenteditable="true" placeholder="Tiêu đề"></></div>
			<div class="editable-content" contenteditable="true" placeholder="Nội dung bài viết"></></div>
			<span class="hidden" id="editableHeader">Tiêu đề</span>
			<span class="hidden" id="editableContent">Nội dung bài viết</span>
		</div>
		<div class="upload-image">
			<p class="post-header">Ảnh cover cho bài viết (600 x 350 px)</p>
			<div class="row">
				<div class="col-xs-6">
					<img src="images/New-Layout/upload-image-post-btn.png" alt="" class="upload-image-post-image">
					<input type="file" class="file-input">
					<span class="button-show-btn">
						<img src="images/New-Layout/upload-btn.png" alt="" class="upload-image-btn-show">
						Upload image
					</span>
				</div>
				<div class="col-xs-6 change-image-content">
					<img src="images/New-Layout/upload-post-images.jpg" alt="">
					<a class="post-btn">
						<input type="file" class="file-input">
						<span class="under">Change Image</span>
					</a>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="select-category">
			<p class="post-header">
				Bài viết thuộc chuyên mục
			</p>
			<div class="row">
				<div class="col-sm-4 margin-bottom">
					<div class="check">
						<input type="checkbox" name="checkbox-office" id="checkbox-office" class="css-checkbox">
						<label for="checkbox-office" class="css-label radGroup1">Tiếng Anh công sở</label>
					</div>
					<div class="check">
						<input type="checkbox" name="checkbox-test-cer" id="checkbox-test-cer" class="css-checkbox">
						<label for="checkbox-test-cer" class="css-label radGroup1">Luyện thi chứng chỉ</label>
					</div>
					<div class="check">
						<input type="checkbox" name="checkbox-kid" id="checkbox-kid" class="css-checkbox">
						<label for="checkbox-kid" class="css-label radGroup1">Tiếng Anh trẻ em</label>
					</div>
					<div class="check">
						<input type="checkbox" name="checkbox-tutor-learner" id="checkbox-tutor-learner" class="css-checkbox">
						<label for="checkbox-tutor-learner" class="css-label radGroup1">Góc học viên và gia sư</label>
					</div>

					<div class="only-admin">
						<div class="check">
							<input type="checkbox" name="checkbox-news" id="checkbox-news" class="css-checkbox">
							<label for="checkbox-news" class="css-label radGroup1">Tin tức và sự kiện Antoree</label>
						</div>
						<div class="check">
							<input type="checkbox" name="checkbox-template" id="checkbox-template" class="css-checkbox">
							<label for="checkbox-template" class="css-label radGroup1">Khóa học mẫu trên Antoree</label>
						</div>
					</div>

				</div>
				<div class="col-sm-8">
					<p class="technical-header">Tiếng Anh chuyên ngành</p>
					<div class="row">
						<div class="col-xs-6">
							<div class="check">
								<input type="checkbox" name="checkbox-it" id="checkbox-it" class="css-checkbox">
								<label for="checkbox-it" class="css-label radGroup1">Công nghệ thông tin</label>
							</div>
							<div class="check">
								<input type="checkbox" name="checkbox-account" id="checkbox-account" class="css-checkbox">
								<label for="checkbox-account" class="css-label radGroup1">Kế toán</label>
							</div>
							<div class="check">
								<input type="checkbox" name="checkbox-construct" id="checkbox-construct" class="css-checkbox">
								<label for="checkbox-construct" class="css-label radGroup1">Xây dựng</label>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="check">
								<input type="checkbox" name="checkbox-sale-marketing" id="checkbox-sale-marketing" class="css-checkbox">
								<label for="checkbox-sale-marketing" class="css-label radGroup1">Sale & Marketing</label>
							</div>
							<div class="check">
								<input type="checkbox" name="checkbox-import-export" id="checkbox-import-export" class="css-checkbox">
								<label for="checkbox-import-export" class="css-label radGroup1">Xuất nhập khẩu</label>
							</div>
							<div class="check">
								<input type="checkbox" name="checkbox-travel-hotel" id="checkbox-travel-hotel" class="css-checkbox">
								<label for="checkbox-travel-hotel" class="css-label radGroup1">Du lịch và khách sạn</label>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="text-right post-button">
				<input type="submit" name="" value="ĐĂNG BÀI" class="post-btn float-right">
				<div class="clearfix"></div>
			</div>
		</div>
	</form>
</div>