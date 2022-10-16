sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"installation","id":"Installation"},{"anchor":"purpose","id":"Purpose"},{"anchor":"principles-and-capabilities","id":"Principles and capabilities"},{"anchor":"api","id":"API"},{"anchor":"drivers","id":"Drivers"},{"anchor":"scaling","id":"Scaling"},{"anchor":"running","id":"Running"},{"anchor":"installation-as-mix-dependency","id":"Installation as mix dependency"}],"id":"readme","title":"Delta"}],"modules":[{"group":"","id":"Delta","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:uuid4/0","id":"uuid4/0"}]}],"sections":[],"title":"Delta"},{"group":"","id":"Delta.Authentication","sections":[],"title":"Delta.Authentication"},{"group":"","id":"Delta.Authorization","sections":[],"title":"Delta.Authorization"},{"group":"","id":"Delta.Commit","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:delete/3","id":"delete/3"},{"anchor":"c:get/3","id":"get/3"},{"anchor":"c:list/2","id":"list/2"},{"anchor":"c:list/4","id":"list/4"},{"anchor":"c:squash/4","id":"squash/4"},{"anchor":"c:write/3","id":"write/3"},{"anchor":"c:write_many/3","id":"write_many/3"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"add_commits/1","id":"add_commits/1"},{"anchor":"delete/1","id":"delete/1"},{"anchor":"do_squash/2","id":"do_squash/2"},{"anchor":"get/2","id":"get/2"},{"anchor":"id/1","id":"id/1"},{"anchor":"list/1","id":"list/1"},{"anchor":"list/3","id":"list/3"},{"anchor":"overlap?/2","id":"overlap?/2"},{"anchor":"resolve_conflicts/2","id":"resolve_conflicts/2"},{"anchor":"squash/2","id":"squash/2"},{"anchor":"validate/1","id":"validate/1"},{"anchor":"validate_many/1","id":"validate_many/1"},{"anchor":"write/1","id":"write/1"},{"anchor":"write_many/1","id":"write_many/1"}]}],"sections":[],"title":"Delta.Commit"},{"group":"","id":"Delta.Commit.CacheLayer","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_commits/3","id":"add_commits/3"},{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"crash_handler/1","id":"crash_handler/1"},{"anchor":"delete/3","id":"delete/3"},{"anchor":"get/3","id":"get/3"},{"anchor":"list/2","id":"list/2"},{"anchor":"list/4","id":"list/4"},{"anchor":"start_link/2","id":"start_link/2"},{"anchor":"write/3","id":"write/3"},{"anchor":"write_many/3","id":"write_many/3"}]}],"sections":[],"title":"Delta.Commit.CacheLayer"},{"group":"","id":"Delta.Commit.PersistentLayer","sections":[],"title":"Delta.Commit.PersistentLayer"},{"group":"","id":"Delta.Connection","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:event/0","id":"event/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:handle_call/3","id":"handle_call/3"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"notify/1","id":"notify/1"}]}],"sections":[],"title":"Delta.Connection"},{"group":"","id":"Delta.Connection.Supervisor","sections":[],"title":"Delta.Connection.Supervisor"},{"group":"","id":"Delta.DataLayer","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:continuation/0","id":"continuation/0"},{"anchor":"t:layer_id/0","id":"layer_id/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:crash_handler/1","id":"crash_handler/1"},{"anchor":"c:start_link/2","id":"start_link/2"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"continue/2","id":"continue/2"},{"anchor":"layer_id_normal/1","id":"layer_id_normal/1"},{"anchor":"layer_id_pid/1","id":"layer_id_pid/1"}]}],"sections":[],"title":"Delta.DataLayer"},{"group":"","id":"Delta.DataLayer.CacheSupervisor","sections":[],"title":"Delta.DataLayer.CacheSupervisor"},{"group":"","id":"Delta.DataLayer.CrashHandler","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add/2","id":"add/2"},{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"init/1","id":"init/1"},{"anchor":"remove/1","id":"remove/1"},{"anchor":"start_link/0","id":"start_link/0"}]}],"sections":[],"title":"Delta.DataLayer.CrashHandler"},{"group":"","id":"Delta.DataLayer.PersistentSupervisor","sections":[],"title":"Delta.DataLayer.PersistentSupervisor"},{"group":"","id":"Delta.Datetime","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"now!/1","id":"now!/1"},{"anchor":"now/1","id":"now/1"}]}],"sections":[],"title":"Delta.Datetime"},{"group":"","id":"Delta.Document","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:collection/0","id":"collection/0"},{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"add_changes/2","id":"add_changes/2"},{"anchor":"create/1","id":"create/1"},{"anchor":"delete/1","id":"delete/1"},{"anchor":"get/1","id":"get/1"},{"anchor":"list/0","id":"list/0"},{"anchor":"list/1","id":"list/1"},{"anchor":"update/2","id":"update/2"},{"anchor":"validate/1","id":"validate/1"}]}],"sections":[],"title":"Delta.Document"},{"group":"","id":"Delta.Document.PersistentLayer","sections":[],"title":"Delta.Document.PersistentLayer"},{"group":"","id":"Delta.Errors","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Delta.Errors"},{"group":"","id":"Delta.Errors.AlreadyExist","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Delta.Errors.AlreadyExist"},{"group":"","id":"Delta.Errors.Conflict","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Delta.Errors.Conflict"},{"group":"","id":"Delta.Errors.DoesNotExist","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Delta.Errors.DoesNotExist"},{"group":"","id":"Delta.Errors.Validation","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Delta.Errors.Validation"},{"group":"","id":"Delta.Json.Patch","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:add/0","id":"add/0"},{"anchor":"t:copy/0","id":"copy/0"},{"anchor":"t:move/0","id":"move/0"},{"anchor":"t:operation/0","id":"operation/0"},{"anchor":"t:remove/0","id":"remove/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"normalize/1","id":"normalize/1"},{"anchor":"overlap?/2","id":"overlap?/2"},{"anchor":"parse/1","id":"parse/1"},{"anchor":"squash/2","id":"squash/2"}]}],"sections":[],"title":"Delta.Json.Patch"},{"group":"","id":"Delta.Json.Pointer","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"overlap?/2","id":"overlap?/2"},{"anchor":"parse/1","id":"parse/1"}]}],"sections":[],"title":"Delta.Json.Pointer"},{"group":"","id":"Delta.Validators","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"json_patch/2","id":"json_patch/2"},{"anchor":"json_patch_op/2","id":"json_patch_op/2"},{"anchor":"json_pointer/2","id":"json_pointer/2"},{"anchor":"maybe_uuid4/2","id":"maybe_uuid4/2"},{"anchor":"uuid4/2","id":"uuid4/2"}]}],"sections":[],"title":"Delta.Validators"}],"tasks":[]}