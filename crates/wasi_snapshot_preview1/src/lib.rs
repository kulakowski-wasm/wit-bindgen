//! This module is intended to be an "adapter module" fed into `wit-component`
//! to translate the `wasi_snapshot_preview1` ABI into an ABI that uses the
//! component model. This library is compiled as a standalone wasm file and is
//! used to implement `wasi_snapshot_preview1` interfaces required by the tests
//! throughout the `wit-bindgen` repository.
//!
//! This is not intended to be a comprehensive polyfill. Instead this is just
//! the bare bones necessary to get `wit-bindgen` itself and its tests working.
//!
//! Currently all functions are trapping stubs since nothing actually runs the
//! output component just yet. These stubs should get filled in as necessary
//! once hosts start running components. The current assumption is that the
//! imports will be adapted to a custom `wit-bindgen`-specific host `*.wit` file
//! which is only suitable for `wit-bindgen` tests.

#![allow(unused_variables)]

use std::arch::wasm32::unreachable;
use wasi::*;

#[no_mangle]
pub extern "C" fn environ_get(environ: *mut *mut u8, environ_buf: *mut u8) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn environ_sizes_get(environc: *mut Size, environ_buf_size: *mut Size) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn args_get(args: *mut *mut u8, args_buf: *mut u8) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn args_sizes_get(argc: *mut Size, arg_buf_size: *mut Size) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn clock_time_get(
    clockid: Clockid,
    precision: Timestamp,
    out: *mut Timestamp,
) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn fd_write(
    fd: Fd,
    iovs_ptr: *const Ciovec,
    iovs_len: usize,
    nwritten: *mut Size,
) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn fd_seek(fd: Fd, offset: Filedelta, whence: Whence, filesize: *mut Size) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn fd_close(fd: Fd) -> Errno {
    unreachable()
}

#[no_mangle]
pub extern "C" fn proc_exit(rval: Exitcode) -> ! {
    unreachable()
}
