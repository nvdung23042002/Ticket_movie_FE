import "./style.css"

import React from 'react'

function Payment() {
    return (
        <div className="payment-section">
            <div className="row-info">
                <div className="column-info-ticket">
                    <div class="payment-movie-infos">
                        <h3 class="payment-movie-name">PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN</h3>
                        <p class="payment-movie-date">Wednesday, 04 May, 2022</p>
                        <p class="payment-movie-time">20:00 ~ 22:06 / 2giờ 6phút</p>
                    </div>
                    <div class="payment-cinema-infos">
                        <label class="cinema-name">Rạp CGV</label>
                        <p class="cinema-details">CGV Vincom Sky Lake Phạm Hùng</p>
                    </div>
                    <div class="payment-movie-room">
                        <div class="payment-room-info">
                            <label>Ghế</label><span>D12, D13, D14, D15</span>
                        </div>

                        <div class="payment-room-info">
                            <label>Phòng chiếu</label><span>Cinema 2</span>
                        </div>
                    </div>
                    <div class="payment-price">
                        <label>Số tiền</label>
                        <i class="bill"></i>
                        <span>420.000đ</span>
                    </div>
            </div>

                <div className="column-QRCode">
                    <h2>Quét mã QR để thanh toán</h2>
                    <div className="qr-code">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhdX4B_7FJbNifch7mLTJqGqlj1aXP_cKEoUifS3PylvnEJEnmVZoDd9roOXmK0jCfPM&usqp=CAU" alt="" />
                    </div>
                    <p>Sử dụng App <span>MoMo</span> hoặc ứng dụng Camera hỗ trợ QR code để quét mã.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment