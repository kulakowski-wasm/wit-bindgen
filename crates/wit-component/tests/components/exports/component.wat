(component
  (type (;0;) (func))
  (type (;1;) (func (param "a" s8) (param "b" s16) (param "c" s32) (param "d" s64) (result string)))
  (type (;2;) (tuple s8 s16 s32 s64))
  (type (;3;) (func (result 2)))
  (type (;4;) (flags "a" "b" "c"))
  (type (;5;) (func (param "x" 4)))
  (type (;6;) (variant (case "a") (case "b" string) (case "c" s64)))
  (type (;7;) (func (param "x" string) (result 6)))
  (type (;8;) (func (param "x" 6) (result string)))
  (core module (;0;)
    (type (;0;) (func (param i32 i32 i32 i32) (result i32)))
    (type (;1;) (func))
    (type (;2;) (func (param i32 i32 i32 i64) (result i32)))
    (type (;3;) (func (result i32)))
    (type (;4;) (func (param i32 i32) (result i32)))
    (type (;5;) (func (param i32 i64 i32) (result i32)))
    (type (;6;) (func (param i32)))
    (func (;0;) (type 0) (param i32 i32 i32 i32) (result i32)
      unreachable
    )
    (func (;1;) (type 1)
      unreachable
    )
    (func (;2;) (type 2) (param i32 i32 i32 i64) (result i32)
      unreachable
    )
    (func (;3;) (type 3) (result i32)
      unreachable
    )
    (func (;4;) (type 1)
      unreachable
    )
    (func (;5;) (type 4) (param i32 i32) (result i32)
      unreachable
    )
    (func (;6;) (type 5) (param i32 i64 i32) (result i32)
      unreachable
    )
    (func (;7;) (type 6) (param i32)
      unreachable
    )
    (memory (;0;) 1)
    (export "memory" (memory 0))
    (export "cabi_realloc" (func 0))
    (export "a" (func 1))
    (export "b" (func 2))
    (export "c" (func 3))
    (export "foo#a" (func 4))
    (export "foo#b" (func 5))
    (export "foo#c" (func 6))
    (export "bar#a" (func 7))
  )
  (core instance (;0;) (instantiate 0))
  (core alias export 0 "memory" (memory (;0;)))
  (core alias export 0 "cabi_realloc" (func (;0;)))
  (core alias export 0 "a" (func (;1;)))
  (core alias export 0 "b" (func (;2;)))
  (core alias export 0 "c" (func (;3;)))
  (func (;0;) (type 0) (canon lift (core func 1)))
  (func (;1;) (type 1) (canon lift (core func 2) (memory 0) (realloc 0) string-encoding=utf8))
  (func (;2;) (type 3) (canon lift (core func 3) (memory 0)))
  (core alias export 0 "bar#a" (func (;4;)))
  (func (;3;) (type 5) (canon lift (core func 4)))
  (core alias export 0 "foo#a" (func (;5;)))
  (core alias export 0 "foo#b" (func (;6;)))
  (core alias export 0 "foo#c" (func (;7;)))
  (func (;4;) (type 0) (canon lift (core func 5)))
  (func (;5;) (type 7) (canon lift (core func 6) (memory 0) (realloc 0) string-encoding=utf8))
  (func (;6;) (type 8) (canon lift (core func 7) (memory 0) (realloc 0) string-encoding=utf8))
  (instance (;0;)
    (export "a" (func 3))
  )
  (instance (;1;)
    (export "a" (func 4))
    (export "b" (func 5))
    (export "c" (func 6))
  )
  (export "a" (func 0))
  (export "b" (func 1))
  (export "c" (func 2))
  (export "bar" (instance 0))
  (export "foo" (instance 1))
)