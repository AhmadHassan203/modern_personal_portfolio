// ... existing code ...

// Find the mobile menu section
{isOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-50 bg-background pt-16 px-4"
  >
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4"
      onClick={() => setIsOpen(false)}
      aria-label="Close menu"
    >
      <X className="h-6 w-6" />
    </Button>
    <nav className="flex flex-col items-center gap-6 text-lg">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-primary",
            pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"
          )}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </motion.div>
)}

// ... existing code ...