x = document.querySelector('.n');
/* gọi tên nút trong html bằng biến x */
x.addEventListener('click', function() {
        console.log('da click');
        document.querySelector('.anh').classList.add('sangphai');
        /* click vào sẽ add class .sangphai vào class .anh */
        document.querySelector('.anh').classList.toggle('sangphai');
        /* click vào sẽ bỏ class .sangphai trong class .anh */
    })
    /* khi click vào sẽ chạy hàm */