package db

import (
	"context"
	"database/sql"

	"github.com/google/uuid"
	"github.com/mvndaai/ctxerr"
	"github.com/mvndaai/known-socially/internal/types"
)

const (
	tableUsers = "users"
)

func scanUser(scanner interface {
	Scan(dest ...any) error
}) (types.User, error) {
	var u types.User
	err := scanner.Scan(
		&u.ID,
		NullableScan(func(v string) { u.Username = v }),
		NullableScan(func(v string) { u.DisplayName = v }),
	)
	return u, err
}

func (v *DB) CreateUser(ctx context.Context, u types.UserCreate) (uuid.UUID, error) {
	id, err := insertAndReturnID(ctx, v.db, tableUsers, u)
	return id, ctxerr.QuickWrap(ctx, err)
}

func (v *DB) GetUser(ctx context.Context, id string) (types.User, error) {
	vs, err := get(ctx, v.db, tableUsers, id, scanUser)
	return vs, ctxerr.QuickWrap(ctx, err)
}

func (v *DB) ListUsers(ctx context.Context, filters types.UserCreate, pagination types.Pagination) ([]types.User, types.PaginationResponse, error) {
	vs, pg, err := listItems(ctx, v.db, tableUsers, filters, pagination, nil,
		func(rows *sql.Rows) (types.User, error) {
			return scanUser(rows)
		})
	return vs, pg, ctxerr.QuickWrap(ctx, err)
}
