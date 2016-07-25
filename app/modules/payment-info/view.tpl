<div id="mod-payment-info">
	<div class="content">
		<div class="header">
			<h1 class="header-text text-center">
				YOUR PAYMENT INFORMATION
			</h1>
			<p>
				Please provide Antoree your payment information so that we can send payment to you in accordance to our payment guidelines.
			</p>
		</div>
		<form action="" method="post">
			<div class="text">
				<p>
					Place of residence
				</p>
				<select name="residence" class="select" id="select-group">
					<option value="" disabled selected style="display: none;" href="">
						Choose place of residence
					</option>
					<option value="group1" href="#group-1">Viet Nam</option>
					<option value="group2" href="#group-2">Nhóm 2</option>
					<option value="group3" href="#group-3">Nhóm 3</option>
					<option value="group4" href="#group-4">Nhóm 4</option>
				</select>
				<input type="hidden" name="group" id="group" value="">
                <input type="hidden" name="country" id="country" value="">
				<div id="group-1" class="bank">
					<input type="hidden" value="" class="check" name="vn-check" id="vn-check">
					<div class="information-input">
						<p>Bank account number (Vietnam Dong only)</p>
						<input type="text" class="input-bank">
						<p>Bank name</p>
						<input type="text" class="input-bank">
						<p>Full name of bank account owner</p>
						<input type="text" class="input-bank">
						<p>Bank's province/city</p>
						<input type="text" class="input-bank">
						<p>Bank's branch</p>
						<input type="text" class="input-bank">
						<p>The bank account above is under your own name or the name of your relative/friend?</p>
						<select name="residence" class="select">
							<option value="">It is under my own name</option>
							<option value="">asgasfasdf</option>
							<option value="">asgasfasdf</option>
						</select>
					</div>
				</div>

				<div class="text-provide bank" id="text-provide">
					<p>
						<i>
							Please provide as many payment methods as possible (at least one payment method).
						</i>
					</p>
				</div>
				<div class="bank" id="philippine-bank">
					<input type="hidden" value="" id="bank-philippine-check" class="check" name="bank-philippine-check">
					<input type="hidden" name="klansdga" value="0">
					<div class="title">
						<input id="philippine-group" name="philippine-group" type="checkbox" class="checkbox-bank">
						<label for="philippine-group">
							<span>
								Bank account
							</span>
						</label>
					</div>
					<div class="information-input">
						<p>Account holder's full name</p>
						<input type="text" class="input-bank" name="bank-account-philippine" id="bank-account-philippine">
						<p>Address</p>
						<input type="text" class="input-bank" name="bank-address-philippine" id="bank-address-philippine">
						<p>City</p>
						<input type="text" class="input-bank" name="bank-city-philippine" id="bank-city-philippine">
						<p>Postal Code</p>
						<input type="text" class="input-bank" name="bank-postal-code-philippine" id="bank-philippine-postal-code">
						<p>Bank Name</p>
						<input type="text" class="input-bank" name="bank-name-philippine" id="bank-name-philippine">
						<p>Bank Account Number (Philippine Peso only)</p>
						<input type="text" class="input-bank" name="bank-account-number-philippine" id="bank-account-number-philippine">
						<p>Recipient's local phone number</p>
						<select name="residence-philippine" class="select">
							<option value="" disabled selected style="display: none;"> It is under the name of my relative/friend</option>
							<option value="">asgasfasdf</option>
							<option value="">asgasfasdf</option>
							<option value="">asgasfasdf</option>
						</select>
					</div>
				</div>

				<div class="bank" id="bank-account">
					<input type="hidden" value="" id="bank-account-check" class="check" name="bank-account-check">
					<div class="title">
						<input id="bank-account-group" name="bank-account-group" type="checkbox" class="checkbox-bank">
						<label for="bank-account-group">
							<span>
								Bank account
							</span>
						</label>
					</div>
					<div class="information-input">
						<p>Account holder's full name</p>
						<input type="text" class="input-bank" id="bank-account-vn" name="bank-account-vn">
						<p>Address</p>
						<input type="text" class="input-bank" id="bank-address-vn" name="bank-address-vn">
						<p>City</p>
						<input type="text" class="input-bank" id="bank-city-vn" name="bank-city-vn">
						<p>Country</p>
						<input type="text" class="input-bank" id="bank-country-vn" name="bank-country-vn">
						<p>Recipient's local phone number</p>
						<input type="text" class="input-bank" id="bank-local-number-vn" name="bank-local-number-vn">
						<p>Bank Name</p>
						<input type="text" class="input-bank" id="bank-name-vn" name="bank-name-vn">
						<p>
							Bank's SWIFT/BIC Code
							<span class="option-span">(optional)</span>
						</p>
						<input type="text" class="input-bank not-required" id="bank-code-vn" name="bank-code-vn">
						<p>
							Local Clearing Code (e.g. Sort Code, BSB, etc.)
							<span class="option-span">(optional)</span>
						</p>
						<input type="text" class="input-bank not-required" id="bank-local-code-vn" name="bank-local-code-vn">
						<p>Bank Account Number / IBAN Number</p>
						<p>
							<i>
								(for SEPA countries in Europe, please provide a bank account that can receive EUR currency; for all other countries in the world, please provide a bank account in your LOCAL currency)
							</i>
						</p>
						<input type="text" class="input-bank" id="bank-account-number-vn" name="bank-account-number-vn">
						<p>Other information (if any) <span class="option-span">(optional)</span></p>
						<input type="text" class="input-bank not-required" id="bank-other-information-vn" name="bank-other-information-vn">
						<p>The bank account above is under your own name or the name of your relative/friend?</p>
						<select name="residence-vn" class="select">
							<option value="" disabled selected style="display: none;"> It is under the name of my relative/friend</option>
							<option value="">asgasfasdf</option>
							<option value="">asgasfasdf</option>
							<option value="">asgasfasdf</option>
						</select>
					</div>
				</div>
				<div class="bank" id="paypal-bank">
					<input type="hidden" value="" id="bank-paypal-check" class="check" name="bank-paypal-check">
					<div class="title">
						<input id="paypal-group" name="paypal-group" type="checkbox" class="checkbox-bank">
						<label for="paypal-group">
							<span>
								PayPal
							</span>
						</label>
						<a href="https://www.paypal.com/" class="float-right bank-information" target="_blank">
							Paypal.com
						</a>
					</div>
					<div class="information-input">
						<p>Your PayPal's email address</p>
						<input type="text" class="input-bank" id="email-paypal" name="email-paypal">
						<p>Recipient's full name</p>
						<input type="text" class="input-bank" id="full-name-paypal" name="full-name-paypal">
						<p>Recipient's country of residence</p>
						<input type="text" class="input-bank" id="country-paypal" name="country-paypal">
					</div>
				</div>

				<div class="bank" id="skrill-bank">
					<input type="hidden" value="" id="bank-skrill-check" class="check" name="bank-skrill-check">
					<div class="title">
						<input id="skrill-group" name="skrill-group" type="checkbox" class="checkbox-bank">
						<label for="skrill-group">
							<span>
								Skrill
							</span>
						</label>
						<a href="https://www.skrill.com" class="float-right bank-information" target="_blank">
							Skrill.com
						</a>
					</div>
					<div class="information-input">
						<p>Your Skrill's email address</p>
						<input type="text" class="input-bank" id="email-paypal" name="email-skrill">
						<p>Recipient's full name</p>
						<input type="text" class="input-bank" id="full-name-skrill" name="full-name-skrill">
						<p>Recipient's country of residence</p>
						<input type="text" class="input-bank" id="country-skrill" name="country-skrill">
					</div>
				</div>

				<div class="bank" id="payoneer-bank">
					<input type="hidden" value="" id="bank-payoneer-check" class="check" name="bank-payoneer-check">
					<div class="title">
						<input id="payoneer-group" name="payoneer-group" type="checkbox" class="checkbox-bank">
						<label for="payoneer-group">
							<span>
								Payoneer
							</span>
						</label>
						<a href="https://www.payoneer.com/" class="float-right bank-information" target="_blank">
							Payoneer.com
						</a>
					</div>
					<div class="information-input">
						<p>Your Payoneer's email address</p>
						<input type="text" class="input-bank" id="email-payoneer" name="email-payoneer">
						<p>Recipient's full name</p>
						<input type="text" class="input-bank" id="full-name-payoneer" name="full-name-payoneer">
						<p>Recipient's country of residence</p>
						<input type="text" class="input-bank" id="country-payoneer" name="country-payoneer">
					</div>
				</div>

				<div class="bank" id="other-bank">
					<input type="hidden" value="" id="bank-other-check" class="check" name="bank-other-check">
					<div class="title">
						<input id="other-payment-group" name="other-payment-group" type="checkbox" class="checkbox-bank">
						<label for="other-payment-group">
							<span>
								Other payment methods
							</span>
						</label>
					</div>

					<div class="information-input">
						<p>
							<i>
								We are willing to consider other payment methods as well (so if you have any suggestions, please type in the box below). But please note that, due to regulatory issues, Antoree can NOT send payment via Western Union or MoneyGram.
							</i>
						</p>
						<textarea name="other-method" id="other-method" name="other-method" rows="5" class="textarea-bank"></textarea>
					</div>
				</div>
			</div>

			<div class="button">
				<input type="submit" value="SUBMIT" class="submit-btn">
			</div>
		</form>
	</div>
</div>