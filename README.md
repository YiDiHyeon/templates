# Templates

### Typescript로 Fetch, Zustand의 보일러 플레이트를 만들어보는 것을 목표로 진행하는 레포지토리

## API

1. [GET] /api/member - 멤버 전체 조회

```typescript
// response
{
    contents : {
        "id": number        // 회원 번호*
        "name": string      // 회원명*
        "age": number       // 회원 나이*
        "email": string     // 회원 이메일*
    },
}
```

2. [GET] /api/memberDetail/{id} - 멤버 상세 조회
```typescript
// response
{
    contents : {
        "id": number        // 회원 번호*
        "name": string      // 회원명*
        "age": number       // 회원 나이*
        "email": string     // 회원 이메일*
    },
}
```

3. [POST] /api/memberDetail/{id} - 멤버 업데이트
```typescript
// request
{
    data : {
        "id"?: number        // 회원 번호
        "name"?: string      // 회원명
        "age"?: number       // 회원 나이
        "email"?: string     // 회원 이메일
    }
}
// response
{
    contents : {
        "id": number        // 회원 번호*
        "name": string      // 회원명*
        "age": number       // 회원 나이*
        "email": string     // 회원 이메일*
    },
}
```
