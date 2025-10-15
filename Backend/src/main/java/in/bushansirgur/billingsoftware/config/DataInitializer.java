package in.bushansirgur.billingsoftware.config;

import in.bushansirgur.billingsoftware.entity.UserEntity;
import in.bushansirgur.billingsoftware.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        userRepository.findByEmail("admin@admin.com").orElseGet(() -> {
            UserEntity admin = UserEntity.builder()
                    .userId(UUID.randomUUID().toString())
                    .email("admin@admin.com")
                    .password(passwordEncoder.encode("12345"))
                    .role("ROLE_ADMIN")
                    .name("Administrator")
                    .build();
            return userRepository.save(admin);
        });
    }
}