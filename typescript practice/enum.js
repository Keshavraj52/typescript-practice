var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["read"] = 2] = "read";
})(Role || (Role = {}));
console.warn(Role);
