#![allow(dead_code, type_alias_bounds)]

fn main() {
    println!("compiled successfully!")
}

#[rustfmt::skip]
mod exports {
    test_helpers::codegen_wasmtime_export!(
        "*.wit"

        // If you want to exclude a specific test you can include it here with
        // gitignore glob syntax:
        //
        // "!wasm.wit"
        // "!host.wit"
        //
        //
        // Similarly you can also just remove the `*.wit` glob and list tests
        // individually if you're debugging.
    );
}

#[rustfmt::skip]
mod imports {
    test_helpers::codegen_wasmtime_import!(
        "*.wit"
    );
}

mod custom_errors {
    wit_bindgen_host_wasmtime_rust::export!({
        src["x"]: "
            foo: func()
            bar: func() -> result<_, u32>
            enum errno {
                bad1,
                bad2,
            }
            baz: func() -> result<u32, errno>
        ",
        custom_error: true,
    });
}
