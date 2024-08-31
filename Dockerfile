FROM golang:1.22-alpine AS build

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .
RUN go build -o /app/cmd/web/app  befit.com/befit/cmd/web/

FROM alpine as runner

COPY --from=build /app/cmd/web/app /
COPY ui/html ui/html

CMD ["/app"]
