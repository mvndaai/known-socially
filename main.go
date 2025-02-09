//go:generate go run ./scripts/error_codes/error_codes.go -format uuid -location . -fix true

package main

import (
	"context"

	"github.com/mvndaai/ctxerr"
	"github.com/mvndaai/known-socially/internal/db"
	"github.com/mvndaai/known-socially/internal/router"
)

func main() {
	ctx := context.Background()

	db, err := db.New(ctx)
	if err != nil {
		ctxerr.Handle(err)
		return
	}
	defer db.Close(ctx)

	err = router.StartServer(ctx, db)
	if err != nil {
		ctxerr.Handle(err)
		return
	}
}
